from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MedicalData, UserProfile
from .serializers import MedicalDataSerializer, UserProfileSerializer
from rest_framework import status
from datetime import date

import pickle
import numpy as np

model=pickle.load(open('tmodel.pkl','rb'));

class PastWeekView(APIView):
    def get(self,request):
        d,resultList,today,index={},[],date.today(),6
        for i in range(7):
            resultList.append({"name":"Day "+str(i+1),"negative":0,"total":0,"positive":0})
        try:
            medicalData=MedicalData.objects.filter(owner=self.request.user).filter()
        except:
            return Response({"message":"Start Predicting"},status=status.HTTP_400_BAD_REQUEST)
        serializer=MedicalDataSerializer(medicalData,many=True)
        for i in serializer.data:
            if i['dateCreated'][:10] not in d:
                res= -1 if i['result']>=70 else 1
                d[i['dateCreated'][:10]]=[res]
            else:
                res= -1 if i['result']>=70 else 1
                d[i['dateCreated'][:10]].append(res)
        for i in d:d[i]=[d[i].count(-1),len(d[i]),d[i].count(1)]
        for i in sorted(d.items(),key=lambda x:x[0],reverse=True):
            resultList[index]={"name":"Day "+str(index+1),"negative":i[1][0],"total":i[1][1],"positive":i[1][2]}
            index-=1
        return Response({"data":resultList})

class MedicalDataView(APIView):
    def get(self,request):
        medicalData=MedicalData.objects.filter(owner=self.request.user)
        length=len(medicalData)
        if not medicalData:
            return Response({"message":"create Entries First"},status=status.HTTP_404_NOT_FOUND)
        serializer=MedicalDataSerializer(medicalData,many=True)
        positive,negative=0,0
        for i in serializer.data:
            if i["result"]>=70:
                positive+=1
            else:
                negative+=1
        return Response({"medicalData":serializer.data,"length":length,"positive":positive,"negative":negative})

    def post(self,request):
        obj=self.request.data
        serializer=MedicalDataSerializer(data=self.request.data)
        output=predictor(obj)
        if serializer.is_valid():
            serializer.save(owner=self.request.user,result=output)
        return Response({"probability":output}, status=status.HTTP_201_CREATED)

class UserProfileView(APIView):
    def get(self,request):
        try:
            userProfile=UserProfile.objects.get(user=self.request.user)
        except:
            return Response({"message":"createProfile"},status=status.HTTP_400_BAD_REQUEST)
        serializer=UserProfileSerializer(userProfile)
        return Response(serializer.data)

    def post(self,request):
        serializer = UserProfileSerializer(data=self.request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        return Response({"message":"success"}, status=status.HTTP_201_CREATED)


class UserProfileUpdateView(APIView):
    def get_object(self):
        try:
            return UserProfile.objects.get(user=self.request.user)
        except:
            return Response({"message":"Create Profile"}, status=status.HTTP_400_BAD_REQUEST)

    def put(self,request):
        userProfile=self.get_object()
        serializer=UserProfileSerializer(userProfile, data=self.request.data)
        if serializer.is_valid():
            serializer.save(user=self.request.user)

        return Response(serializer.data,status=status.HTTP_200_OK)



class InstantUser(APIView):
    def post(self, request):
        obj=self.request.data
        output=predictor(obj)
        return Response({'probability':output})

def predictor(obj):
    test=[float(obj[i]) for i in obj if i!='patientName' and i!='patientId']
    final=[np.array(test)]
    prediction=model.predict_proba(final)
    print(prediction)
    output=round(prediction[0][1]*100,2)
    #output=float('{0:.{1}f}'.format(prediction[0][1], 2))*100
    return output


# class UserProfileViewSet(viewsets.ModelViewSet):
#     queryset=UserProfile.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [permissions.IsAuthenticated]
#
#     def get_queryset(self):
#         queryset=UserProfile.objects.get(user=self.request.user)
#         serializer=UserProfileSerializer(queryset)
#         print(serializer.data)
#         return Response(serializer.data);
#
#     def perform_create(self,serializer):
#         serializer.save(user=self.request.user)
#
#     def perform_update(self, serializer):
#         serializer.save(user=self.request.user)
#
#     def create(self,request):
#         serializer=self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# class Predict(APIView):
#     serializer_class=MedicalDataSerializer
#
#     def get_quertyset(self):
#         medicalData = MedicalData.objects.all()
#
#
#     def get(self, request):
#         medicalData =MedicalData.objects.get(id=self.request.user.id)
#         serializer=MedicalDataSerializer(medicalData, many=True)
#         return Response(serializer.data)


# class MedicalDataViewSet(viewsets.ModelViewSet):
#     serializer_class = MedicalDataSerializer
#     permission_classes = [permissions.IsAuthenticated]
#
#     def get_queryset(self):
#         return self.request.user.medicalData.all()
#
#
#     def perform_create(self, serializer):
#         obj=self.request.data
#         output=predictor(obj)
#         serializer.save(owner=self.request.user,Result=output)
