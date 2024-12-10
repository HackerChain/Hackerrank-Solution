def merge_the_tools(string, k):
    # Step 1: Split string into n/k substrings of length k
    for i in range(0, len(string), k):
        # Get substring of length k
        substring = string[i:i+k]
        
        # Step 2: Remove duplicates while maintaining order
        seen = set()
        unique_chars = []
        
        for char in substring:
            if char not in seen:
                seen.add(char)
                unique_chars.append(char)
        
        # Step 3: Print the resulting string
        print(''.join(unique_chars))

# Test the function
if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)