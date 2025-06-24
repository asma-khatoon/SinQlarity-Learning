list =[1,3,4,5,6,2,7,8,6,8,9]
isBreak = 0
i=0
while i<11:
    if i%9==0:
        isBreak = 1
        break
    print(i)
if isBreak ==1:
    print("Break is called")
else:
    print("loop is completed")

    