from django.shortcuts import render


def index(request):
    return render(request,'index.html',{'output':100006569958511});
