
# a = int(input("Input ur first number -"))
# b = int(input("Input ur second number -"))
# if a<b:
#     while a!=b:
#         a += 1
#         if a%2==0:
#             print(a)
# elif b<a:
#     while b!=a:
#         b += 1
#         if b%2==0:
#             print(b)
# else:
#     print("GET BACK TO WORK!!!AND DO NOT MAKE MISTAKES")

a = 100
num = 0
while a!=9999:
    strA=str(a)
    if len(strA)==len(set(strA)):
        num+=1
    a+=1
print(num,end="")