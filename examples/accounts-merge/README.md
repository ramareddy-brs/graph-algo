## Accounts Merge

The accountsMerge algorithm takes a list of accounts, where each account contains a name and a list of associated emails. It merges accounts with shared emails, grouping them together under the same name. It uses the Union-Find algorithm to efficiently find and merge the accounts with common emails.

The algorithm first sets up a data structure to represent the parent-child relationships between emails. Then, it iterates through the accounts to build these relationships and finally, groups the merged accounts together to return the result as an array of merged accounts.