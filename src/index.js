module.exports = function check(str, bracketsConfig) {
  var strArr = str.split(''), i = 0, j = 0;
    while (j < strArr.length) {
        if (i < bracketsConfig.length) {
            if (strArr[j] == bracketsConfig[i][0] && strArr[j + 1] == bracketsConfig[i][1]) {
                strArr.splice(j, 2);
                cycleNumb = 1;
                i = 0;
                j = 0;
            } else {
                i++;
            }
        } else {
            i = 0;
            j++;
        }
    }

  return strArr.length == 0;
}
