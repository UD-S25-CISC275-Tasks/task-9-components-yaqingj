import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}
export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);
    const [rolling, setRolling] = useState<boolean>(false);
    function rollLeft(): void {
        setRolling(true);
        setLeftDie(d6());
    }
    function rollRight(): void {
        setRolling(true);
        setRightDie(d6());
    }
    React.useEffect(() => {
        if (leftDie && rightDie && rolling) {
            setRolling(false);
        }
    }, [leftDie, rightDie, rolling]);
    return (
        <div>
            <div data-testid="left-die">🎲 {leftDie}</div>
            <div data-testid="right-die">🎲 {rightDie}</div>
            <Button onClick={rollLeft} disabled={rolling}>
                Roll Left
            </Button>
            <Button onClick={rollRight} disabled={rolling}>
                Roll Right
            </Button>
            {leftDie === rightDie && leftDie !== 1 && <div>🎉 You Win! 🎉</div>}
            {leftDie === 1 && rightDie === 1 && <div>💀 You Lose! 💀</div>}
        </div>
    );
}
