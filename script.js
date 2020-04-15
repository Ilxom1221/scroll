// class HUMAN {
//     constructor(param) {
//         this.name = param.name
//         this.gen = param.gender;
//     }
// }

// const user = {
//     name: 'Ильхом',
//     gender: 'M'

// }
// const human = new HUMAN(user)

// console.log(human);



// class WOMAN extends HUMAN {
//     constructor(options) {
//         super(options)
//     }
// }

// const girl = new WOMAN({
//     name: 'Mona lisa',
//     gender: 'Ж'
// })
// console.log(girl);


// class MAN extends HUMAN {
//     constructor(a) {
//         super(a)
//         this.gen = 'М'
//     }
// }

// const man = new MAN({
//     name: 'Иля',
   
// })
// console.log(man);



class SCROLL {
    constructor(options) {
        if(typeof options.el === 'string') {
            this.element = document.querySelector(options.el)
        }else if (options.el instanceof HTMLElement) {
            this.element = options.el
        }

        this.marginTop = options.top;
        this.unit = options.unit;
        this.element.style.position = 'fixed'
        this.element.style.top = this.Unit() + 'px';

        window.addEventListener('scroll', () => this.scroll());
    }
    scroll() {

        let windowScroll = this.Unit() - scrollY;

        if(windowScroll > 0) {
            this.element.style.top = windowScroll + 'px'
        }else {
            this.element.style.top = '0px';
        }

        
    }
    Unit() {
        if(this.unit === 'px') {
            return this.marginTop < 0 ? this.marginTop * -1 : this.marginTop;
        }else if(this.unit === '%' || this.unit === undefined) {
            return this.calc(innerHeight - this.element.clientHeight, this.marginTop)
        }
    }
    calc(height, percent) {
        return height / 100 * percent;
    }
}

const myScroll = new SCROLL({
    el: '.header__nav',
    top: 100,
    unit: '%'
})


class HOVER {
    constructor(options) {
        this.el = document.querySelector(options.el)
        this.el.addEventListener('mouseover', () => this.randomPosition())
    }
    randomPosition() {
        this.el.style.marginTop = this.random(0, innerHeight - this.el.clientHeight) + 'px'
        this.el.style.marginLeft = this.random(0, innerWidth - this.el.clientWidth) + 'px'
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

const hover = new HOVER({
    el: '.header__content'
})

