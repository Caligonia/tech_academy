# Python:    3.6.2
#
# Author:   Paul "Pol" R. Chapman
#
# Purpose:  The Tech Academy - Python Course, Drill 35 of 68
#           Demonstrating how to pass variables from function to function
#           while producing a functional game.
#
#           Remember, function_name(variable) _means that we pass in the variable.
#           return variable _means that are returning the variable to
#           the calling function

def start(nice=0,mean=0,name=""):
    # get user's name
    name = describe_game(name)
    nice,mean,name = nice_mean(nice,mean,name)
    
def describe_game(name):
    '''
    Check if this is a new or not?
    If it is new, get the user's name.
    If it is not a new game, thank the player for
    playing again and continue with the game
    '''
    
    if name != "": # meaning, if we do not this user's name, then they are a new player and we need to get their name
        print("\nThank you for playing again, {}!".format(name))
    else:
        stop = True
        while stop:
            if name == "":
                name = input("\nWhat is your name? ").capitalize()
                if name != "":
                    print("\nWelcome, {}!".format(name))
                    print("\nIn this game, you will be greated by several different people. \nYou can be nice or mean.")
                    print("\nAt the end of the game your fate will be influenced from your actions.")
                    stop = False
    return name
    
def nice_mean(nice,mean,name):     
    stop = True
    while stop:
        show_score(nice,mean,name)
        pick = input("\nA stranger approaches you for a conversation.\nWill you be nice or mean? n/m:").lower()
        if pick == "n":
            print("They smile, wwave, and walk away...")
            nice = (nice + 1)
            stop = False
        if pick == "m":
            print("\nThe stranger glares at you menacingly and abruptly storms off...")
            mean = (mean + 1)
            stop = False
    score(nice,mean,name) # pass the 3 variables to the score()

def show_score(nice,mean,name):
    print("\n{}, you currently have ({}, Nice) and ({}, Mean) points.".format(name,nice,mean))

def score(nice,mean,name):
    # score function is being passed the values stored within the 3 variables
    if nice > 5: # if condition is valid, call win function passing in the variables so it can use them
        win(nice,mean,name)
    if mean > 5: # if condition is valid, call win function passing in the variables so it can use them
        lose(nice,mean,name)
    else:        # else, call nice,_mean function passing in the variables so it can use them
        nice_mean(nice,mean,name)

def win(nice,mean,name):    
    print("\nNice job {}, you win! \nEveryone loves you and you now live in a palace!".format(name)) # Substitute the {} wildcards eith our variables
    again(nice,mean,name) # call again function and pass in our variables

def lose(nice,mean,name):    
    print("\nToo bad, game over! \n{}, you live in a van by the river, wretched and alone!".format(name)) # Substitute the {} wildcards eith our variables
    again(nice,mean,name) # call again function and pass in our variables

def again(nice,mean,name):
    stop = True
    while stop:
          choice = input("\nDo you want to play again? y/n: ").lower()
          if choice == "y":
              stop = False
              reset(nice,mean,name)
          if choice == "n":
              print("\nSee you later alligator!")
              stop = False
              exit()
          else:
              print("\nPlease enter 'y' for 'YES', 'n' for 'No'... ")

def reset(nice,mean,name):
          nice = 0
          mean = 0
          # Notice, I do not reset the name variable as that same user has elected to play again
          start(nice,mean,name)    

name = "main"
start()

