from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MedicalData
from .serializers import MedicalDataSerializer

import pickle
import numpy as np

model=pickle.load(open('tmodel.pkl','rb'));



class MedicalDataViewSet(viewsets.ModelViewSet):
    serializer_class = MedicalDataSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.medicalData.all()


    def perform_create(self, serializer):
        obj=self.request.data
        output=predictor(obj)
        serializer.save(owner=self.request.user,Result=output)


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


class InstantUser(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        obj=self.request.data
        output=predictor(obj)
        return Response({'probability':output})




def predictor(obj):
    test=[float(obj[i]) for i in obj if i!='patientName']
    final=[np.array(test)]
    prediction=model.predict_proba(final)
    output=float('{0:.{1}f}'.format(prediction[0][1], 2))*100
    return output
