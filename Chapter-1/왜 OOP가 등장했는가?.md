# 왜 OOP가 등장했을까?

이 물음에 답하기 위해 OOP라는 패러다임 이전에는 무엇이 먼저 존재했는 가를 따져봐야한다. OOP 이전에는 절차적 프로그래밍이라는 패러다임이 존재했다.

절차의 사전적 의미로 "일을 치르는 데 거쳐야 하는 순서나 방법." 이라는 뜻을 가지고 있는데, 실제 프로그래밍에서의 절차와 한국의 사전적 의미의 절차는 약간은 다르게 봐야 한다. 프로그래밍에서 절차는 프로시져(procedure)를 뜻한다.

프로시져란 특정 데이터를 조건 혹은 반복문을 통해 일정한 절차를 수행하는 것을 의미한다. 더 쉽게 말하자면, 데이터를 다루는 행위가 이뤄지는 곳을 프로시져라고 한다.

```javascript
let customerCash = 20000
let customerTicket = 0

let sellerCash = 0
let sellerTicket = 5
let ticketPrice = 10000

function canAfford() {
    if customerCash >= ticketPrice {
         sellTicket()
    } else {
        refuse()
    }
}

function sellTicket() {
    customerCash -= ticketPrice
    sellerCash += ticketPrice

    customerTicket += 1
    sellerTicket -= 1

    print("즐거운 관람 되세요!")
}

function refuse() {
    print("돈이 부족하시네요.")
    return
}

canAfford()
```

[창시자 앨런 케이가 말하는, 객체 지향 프로그래밍의 본질 예제 코드 eddy_song](https://velog.io/@eddy_song/alan-kay-OOP)

위의 코드 예제를 보면 아래가 프로시져다. 특정 데이터를 조건 혹은 반복문을 통해 일정한 절차를 수행하는 것을 의미한다.

더 쉽게 말하자면, 데이터를 다루는 행위가 이뤄지는 부분을 프로시져라고 한다. 티켓을 파는 행위에는 customer와 seller의 데이터를 특정한 방법을 통해 수정이 이루어지는데, 이러한 행위를 하나로 모아서 sellTicket이라는 기능으로 묶어서 이름을 붙여줬다.

```javascript
function canAfford() {
    if customerCash >= ticketPrice {
         sellTicket()
    } else {
        refuse()
    }
}

function sellTicket() {
    customerCash -= ticketPrice
    sellerCash += ticketPrice

    customerTicket += 1
    sellerTicket -= 1

    print("즐거운 관람 되세요!")
}

function refuse() {
    print("돈이 부족하시네요.")
    return
}
```

이러한 방식이 OOP의 패러다임이 제시되기 전에 주를 이룬 패러다임인 절차적 프로그래밍이다. 절차적 프로그래밍은 명령형 프로그래밍과 동의어로 사용되기도 하지만, 엄밀히 따지면 또 완전히 같다고 볼 수는 없다.

절차적 프로그래밍은 프로그램을 작은 프로시져의 단위로 작성하는 패러다임이다. 세부적으로는 절차적 프로그래밍이 명령형 프로그래밍의 하위 개념정도로 볼 수 있다.

절차적 프로그래밍의 가장 큰 문제점은 데이터를 공유한다는 것이다. 이를 "변경 가능한 공유 데이터" 라고 하는데, 프로그램의 규모가 커질수록 많은 프로시져들이 이 변경 가능한 공유 데이터에 접근이 가능해지고 문제가 발생했을 때 어떤 프로시져에서 문제가 발생했는 지 찾는 것은 어려운 일이 될 것이다. 또한 데이터의 구조가 변경되었을 때 그 데이터에 연관되어 있는 (의존성을 가지고 있는) 프로시져들 또한 수정이 이루어져야 한다.

## 그래서 절차적 프로그래밍의 문제점을 보완하기 위해 등장?

사실 OOP 패러다임의 창시자인 엘런 케이는 이러한 문제점을 보완하기 위해서 새로운 개념을 등장시킨 것은 아닐 것 같다. 그는 학부 시절 생물학을 전공했고, 독립적인 세포들이 서로에게 물질을 주고받는 행위에서 기반한 독특한 아이디어에서 비롯된 것이라고 생각한다.

어찌되었건 많은 프로그래머들은 절차적 프로그래밍의 문제점에 고착했고 이러한 상황에서 OOP 패러다임을 적극적으로 도입하기 시작했고, c++, java 언어에 큰 인기를 입어 큰 성공을 이루게 된 개념이라고 말하는 사람들도 존재한다. 또한 이전 절차적 프로그래밍이 정확한 공식에 의해 결과를 도출하는 요리사나 화학자로 비유한다면 객체 지향 프로그래밍은 그리스 철학자나 19세기 자연주의자로 비유하는 사람들도 있다.

그렇지만 이전까지는 TOP-DOWN 방식의 절차적 프로그래밍에 패러다임을 BOTTOM-UP의 패러다임으로 가져오고, 코드에 대한 새로운 시야를 제공한 대단한 패러다임인 것은 분명하다.
