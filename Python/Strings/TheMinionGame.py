def minion_game(string):
    # Initialize scores
    stuart_score = 0  # Consonants
    kevin_score = 0   # Vowels
    
    # Get string length
    str_length = len(string)
    
    # Define vowels
    vowels = 'AEIOU'
    
    # Calculate scores
    for i in range(str_length):
        if string[i] in vowels:
            # If current char is vowel, Kevin gets points
            # Points = length of string - current position
            kevin_score += str_length - i
        else:
            # If current char is consonant, Stuart gets points
            stuart_score += str_length - i
    
    # Determine winner
    if stuart_score > kevin_score:
        print(f"Stuart {stuart_score}")
    elif kevin_score > stuart_score:
        print(f"Kevin {kevin_score}")
    else:
        print("Draw")

# Test the function
if __name__ == '__main__':
    s = input()
    minion_game(s)
