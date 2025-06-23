print("Enter first number")
n1 = int(input())
print("Enter second number")
n2 =int(input())
print("Enter third number")
n3 =int(input())
print("Enter fourth number")
n4 =int(input())

if n1>n2 and n2>n3 and n3>n4:
    print("n1 is greatest no")
elif n2>n3 and n3>n4:
    print("n2 is greatest no")
elif n3>n4:
    print("n3 is greatest number")
else:
    print("n4 is greatest number")
