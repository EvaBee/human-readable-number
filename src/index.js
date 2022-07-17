module.exports = function toReadable (number) {

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    const century = Math.floor(number / 100);
    number = number % 100;
    const ten = Math.floor(number / 10);
    const one = Math.floor(number % 10);
    let res = "";
    if (century) {
        res += (((res === "") ? "" : " ") +
            toReadable(century) +" hundred");
    }
    if (ten>0 || one>0)
        if (!(res===""))
        {
            res += " ";
        }

    {
        if (ten < 2)
        {
            res += ones[ten * 10 + one];
        }
        else
        {

            res += tens[ten];
            if (one>0)

            {
                res += (" " + ones[one]);
            }
        }
    }
    if (res === "")
    {
        res = "zero";
    }
    return res;
}
