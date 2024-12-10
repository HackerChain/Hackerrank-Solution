from itertools import product

def maximize_it(lists, m):
    # Get all possible combinations using product
    combinations = product(*lists)
    
    # Calculate maximum value using list comprehension
    max_value = max(sum(x*x for x in combo) % m for combo in combinations)
    
    return max_value

# Input processing
if __name__ == '__main__':
    # First line input: K (number of lists) and M (modulo value)
    k, m = map(int, input().split())
    
    # Read K lists
    lists = []
    for _ in range(k):
        # Convert input line to list of integers, excluding first number
        lst = list(map(int, input().split()))[1:]
        lists.append(lst)
    
    # Get and print result
    result = maximize_it(lists, m)
    print(result)
