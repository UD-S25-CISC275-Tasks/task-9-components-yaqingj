import React, { useState } from "react";
import { Button } from "react-bootstrap";
enum Holiday {
    NewYear = "🎉 New Year",
    Spring_Break = "💖 Spring break",
    Independence = "🎊 Independence Day",
    Halloween = "🎃 Halloween",
    Christmas = "🎄 Christmas"
}
const alphabetOrder: Holiday[] = [
    Holiday.Christmas,
    Holiday.Halloween,
    Holiday.Independence,
    Holiday.NewYear,
    Holiday.Spring_Break
];
const yearOrder: Holiday[] = [
    Holiday.NewYear,
    Holiday.Spring_Break,
    Holiday.Independence,
    Holiday.Halloween,
    Holiday.Christmas
];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(Holiday.NewYear);
    function nextAlphabet(): void {
        const currentIndex = alphabetOrder.indexOf(holiday);
        setHoliday(alphabetOrder[(currentIndex + 1) % alphabetOrder.length]);
    }
    function nextYear(): void {
        const currentIndex = yearOrder.indexOf(holiday);
        setHoliday(yearOrder[(currentIndex + 1) % yearOrder.length]);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextYear}>Advance by Year</Button>
        </div>
    );
}