module.exports = function check(str, bracketsConfig) {
    var stack = [];
    var flag;
    stack.push(str.charAt(0));
    for(let i = 1;i<str.length;++i){
        flag = true;
        for(let bracket of bracketsConfig){
            if(stack[stack.length-1]===bracket[0] && str.charAt(i)===bracket[1]){
                stack.pop();
                flag = false;
                break;
            }

        }
        if(flag)stack.push(str.charAt(i));
    }
    return stack.length === 0;

}
