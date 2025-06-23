print("Enter no:")
num = int(input())
for i in range(num):
    n=i+1
    if n%2==0:
        print(n,"is even number")
    elif n%3==0 or n%10==3:
         print(n,"is free")
    else:
        print(n,"is odd number")
        
