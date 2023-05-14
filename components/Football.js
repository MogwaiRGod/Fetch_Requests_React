export default function Football(props) {
    const shoot = (msgAlert, evenement) => {
        // console.log(props.but);
        if (props.but) {
            return <Goal />;
        }
        <MissedGoal />
        // alert(msgAlert);
    };

    return (
        <button onClick={(evnt) => { 
            shoot(props.affichage, evnt); 
        }}>
            ALERTE
        </button>
    )
}

export function MissedGoal() {
    return (
        <h1>CHEH</h1>
    );
}

export function Goal() {
    return (
        <h1>Félicitations</h1>
    );
}

export function randResult() {
    let goal = Math.floor(Math.random() * 2); // 0 ou 1
    goal ? Goal() : MissedGoal() ; 
}