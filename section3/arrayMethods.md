##`pop`##
`array.pop` does two things simultaneously:
- It calls the last item in an array
- While doing that, it also removes that item from the array.
- A possible (though imperfect) metaphor for thinking about it is this video: https://www.youtube.com/watch?v=YBQ4rQJ0mkY. The starting yard is the array, the dog trainer is using the array.pop method. As she does, the dogs name gets called, and they leave the array. (pretend for these purposes that each name she calls is the last name in the array)


##`push`##
`array.push` does two things simultaneously as well
- It adds one thing to the end of an array
- It then returns the new length of the array
- Example:
`var whos_working_on_this = ['me', 'myself'];

whos_working_on_this.push('I');
//expected output : 3

console.log(whos_working_on_this);
//expected output: ['me', 'myself', 'I']`

##`shift`##
`array.shift` does two things simultaneously as well (hot damn! There's a pattern!)
- It works similarly to `array.pop` but rather than calling/removing the last item in an array, it calls/removes the FIRST item in an array
- Example:
1. There is an array called array1 and it consists of [1,2,3,4]
1. by using `array1.shift`, you would call the element "1"
1. The new array1 would consist of [2,3,4]
1. If you were to do `array1.pop`, instead, it would call the element 4, and the new array would be [1,2,3]

##`unshift`##
`array.unshift` seems to be the inverse of `array.push`, just as `array.shift` was the inverse of `array.pop`
- It adds an element to the beginning of the array
- It logs the new length of the array
- Example
`var whos_working_on_this = ['me', 'myself'];

whos_working_on_this.unshift('I');
//expected output : 3

console.log(whos_working_on_this);
//expected output : ['I','me', 'myself']
