"""find sum of all multiples of 3 or 5 below 1000"""

s=0 # init the sum to zero
for i in range(1,1000):
    if i%3==0 or i%5==0:
        s+=i
print(s)


# outut - 233168