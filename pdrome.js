
  function checkPalindrome(str) {

    const len = str.length;

   
    for (let i = 0; i < len / 2; i++) {

        
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


//console.log(checkPalindrome('ABCBA'));
//console.log(checkPalindrome("MOCOMM"));

function Palindrome(str) {

    const len = str.length;

   
    for (let i = 0; i < len; i++) {

        
        if (str[i] == (len -i)) {

            return 'It is a palindrome';
        }
    }
    return 'It is not a palindrome';
}


//console.log(checkPalindrome('ABCBA'));

function Palindromecheck(str) {

   
    for (let i = 0; i < str.length; i++) {

        
        if (str[i] == (str.length -i)) {

            return 'It is a palindrome';
        }
    }
    return 'It is not a palindrome';
}


console.log(Palindromecheck("KALYANI"));