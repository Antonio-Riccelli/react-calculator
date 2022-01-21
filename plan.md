Components and logic breakdown
- Calculator container (App)
- Display
  - Number + operator display
  - Number display
    - initial value of 0


- NumberButtonsContainer
  - Buttons


- OperatorButtonsContainer
  - Buttons 
    - "+"
    - "-"
    - "*"
    - "/"
    - "=", id = "equals"



-initial number can only have one zero
-more than one "." should not be accepted
-if more than one operator, the final operator is used, unless it is minus, in which case it indicates a negative number
-if an operator is clicked immediately after outputting result with "=", this performs an operation on the previous result
- at least 4 decimal places of precision