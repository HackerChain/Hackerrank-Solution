from itertools import combinations

def calculate_probability(N, letters, K):
    # Step 1: Get all possible combinations of K indices
    indices = list(range(N))
    all_combinations = list(combinations(indices, K))
    
    # Step 2: Count favorable combinations (containing 'a')
    favorable = 0
    total = len(all_combinations)
    
    # Count combinations that have at least one 'a'
    for combo in all_combinations:
        if any(letters[i] == 'a' for i in combo):
            favorable += 1
    
    # Step 3: Calculate probability
    probability = favorable / total
    
    # Step 4: Format to 3 decimal places
    return "{:.3f}".format(probability)

# Process input
if __name__ == '__main__':
    N = int(input())
    letters = input().split()
    K = int(input())
    print(calculate_probability(N, letters, K))
