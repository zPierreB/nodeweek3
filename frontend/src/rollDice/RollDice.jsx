import { useState, useEffect } from 'react'

const RollDice = ({ checkWin }) => {
    const faces = 6

    const [rolls, setRolls] = useState([])
    const [resultMessage, setResultMessage] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [pastryWin, setPastryWin] = useState(0)

    const makeOneRoll = async () => {
        const arrayRolls = []

        for (let i = 0; i < 5; i++) {
            const number = Math.floor((Math.random() * faces) + 1)
            arrayRolls.push(number)
        }
        setRolls(arrayRolls)
        setBtnDisabled(true)
        await checkWin(pastryWin)
    }

    let array1 = []
    let array2 = []
    let array3 = []
    let array4 = []
    let array5 = []
    let array6 = []

    let doublePair = []
    let carre = []
    let yahtzee = []

    const checkNumbers = (rolls) => {
        rolls.filter((roll) => {
            if (roll == 1) {
                array1.push(roll)
                if (array1.length == 2 || array1.length == 3) {
                    doublePair.unshift('pair')
                }
                if (array1.length == 4) {
                    carre.unshift('carre')
                }
                if (array1.length == 5) {
                    yahtzee.unshift('yahtzee')
                }
            }
            if (roll == 2) {
                array2.push(roll)
                if (array2.length == 2 || array2.length == 3) {
                    doublePair.unshift('pair')
                }
                if (array2.length == 4) {
                    carre.unshift('carre')
                }
                if (array2.length == 5) {
                    yahtzee.unshift('yahtzee')
                }
            }
            if (roll == 3) {
                array3.push(roll)
                if (array3.length == 2 || array3.length == 3) {
                    doublePair.unshift('pair')
                }
                if (array3.length == 4) {
                    carre.unshift('carre')
                }
                if (array3.length == 5) {
                    yahtzee.unshift('yahtzee')
                }
            }
            if (roll == 4) {
                array4.push(roll)
                if (array4.length == 2 || array4.length == 3) {
                    doublePair.unshift('pair')
                }
                if (array4.length == 4) {
                    carre.unshift('carre')
                }
                if (array4.length == 5) {
                    yahtzee.unshift('yahtzee')
                }
            }
            if (roll == 5) {
                array5.push(roll)
                if (array5.length == 2 || array5.length == 3) {
                    doublePair.unshift('pair')
                }
                if (array5.length == 4) {
                    carre.unshift('carre')
                }
                if (array5.length == 5) {
                    yahtzee.unshift('yahtzee')
                }
            }
            if (roll == 6) {
                array6.push(roll)
                if (array6.length == 2 || array6.length == 3) {
                    doublePair.unshift('pair')
                }
                if (array6.length == 4) {
                    carre.unshift('carre')
                }
                if (array6.length == 5) {
                    yahtzee.unshift('yahtzee')
                }
            }
        })
    }

    const checkResults = (doublePair, carre, yahtzee) => {
        if (yahtzee.length > 0) {
            setResultMessage('You win 3 pastries!')
            setPastryWin(3)
            return
        }
        if (carre.length > 0) {
            setResultMessage('You win 2 pastries!')
            setPastryWin(2)
            return
        }
        if (doublePair.length > 1 && doublePair.length < 4) {
            setResultMessage('You win 1 pastry!')
            setPastryWin(1)
            return
        }
        else {
            setResultMessage('You lose...')
        }
    }

    useEffect(() => {
        checkResults(doublePair, carre, yahtzee)
    }, [doublePair, carre, yahtzee])

    checkNumbers(rolls)

    console.log('help', pastryWin)

    return (
        <div>
            <h1>{resultMessage}</h1>
            <p>{rolls}</p>
            <input type='submit' value='Roll dice' onClick={() => makeOneRoll()} />
        </div>
    )

}

export default RollDice