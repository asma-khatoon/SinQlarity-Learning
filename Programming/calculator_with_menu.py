print("Enter your choice:")
print("1. Addition")
print("2. subtraction")
print("3. Multiplication")
print("4. Division")

ch = int(input())
print("Enter First No.:")
n1 = int(input())
print("Enter Second Number:")
n2 = int(input())
result = 0
def add():
    result = n1+n2
    return result
def sub():
    result = n1-n2
    return result
def mul():
    result = n1*n2
    return result
def div():
    result = n1/n2
    return result
while 1:
    if ch==1:
        result= print("Addition of two numbers:", add())
    elif ch==2:
        result= print("Substraction of two numbers:",sub())
    elif ch==3:
        result= print("Multiplication of two numbers:", mul())
    elif ch==4:
        result =print("Division of two numbers:", div())
    else:
        print("You entered wrong choice, you are exiting...")
    break








