const solution = (n, control) => {
    let result = n;
    for (let i = 0; i < control.length; i++) {
        switch (control.charAt(i)) {
            case "w" :
                result++;
                break;
            case "s" :
                result--;
                break;
            case "d" :
                result += 10;
                break
            case "a" :
                result -= 10;
                break
        }
    }
    return result
}
