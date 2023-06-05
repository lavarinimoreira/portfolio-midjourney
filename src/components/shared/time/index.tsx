import { useEffect, useState } from 'react';
import { Container, SystemTime } from './styles';

function Time() {
    const [date, setDate] = useState(new Date());

    // getting the current time
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <SystemTime>
                <span className='date'>{date.toLocaleDateString()}</span>
                <span>{date.toLocaleTimeString()}</span>
            </SystemTime>
        </Container>
    );
}

export default Time;
