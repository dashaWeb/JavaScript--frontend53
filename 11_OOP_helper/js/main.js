
class MyHTMLElement{
    constructor(tag,close,text,attributes,styles)
    {
        this.tag = tag;
        this.close = close;
        this.text= text;
        this.attributes=attributes;
        this.styles = styles;
        let closed = this.close ? `</${this.tag}>` : ''
        this.el =  `<${this.tag}> ${this.text} ${closed}`;
    }
    transformStyle(key)
    {
        // 'fontSize --> font-size
        
        let str = ''
        for (let i = 0; i < key.length; i++) {
            if(key[i] >= 'A' && key[i] <= 'Z'){
                str += '-';
                str += (key[i]).toLowerCase()
            }
            else{
                str+= key[i]
            }
                
        }
        return str;
        
    }
    getStyles()
    {
        /*
    [
    {key:value}    
    ]
        */
        // color : red; font-size:14px;
        return this.styles.map((el)=>{
            let key = Object.keys(el)[0];
            return `${this.transformStyle(key)}:${el[key]};`
        }).join('')
    }
    appendAfter(element){

    }
    appendBefore(element)
    {
        let str = ''
        for (let i = 0; i < this.el.length; i++) {
            str += this.el[i];
            if(this.el.indexOf(`${this.tag}`) + this.tag.length == i)
            {
                str += element.getHtml();
            }
        }
        this.el = str;
    }
    setAttributes()
    {

    }
    setStyles()
    {
        let str = ''
        for (let i = 0; i < this.el.length; i++) {
            str += this.el[i];
            if(this.el.indexOf(`${this.tag}`) + this.tag.length - 1 == i)
            {
                str += ' style = "';
                str += this.getStyles()
                str += '"'
            }
        }
        this.el = str;
    }
    getHtml()
    {
        this.setStyles()
        return this.el;
    }
}

let el = new MyHTMLElement('div',true,'lorem ipsum','',[{background:'red'},{fontSize:'14px'}])

let p = new MyHTMLElement('p',true,'lorem','',[{color:'white'},{fontSize:'34px'}])

el.appendBefore(p)

document.writeln(el.getHtml())
// let obj = {color:'red'}
// console.log(Object.keys(obj))