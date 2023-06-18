export function ProminentNumber({ num, text }: { num: number, text: string }) {
    return <div className="prominent-number d-flex align-items-center">
        <div className='circle-inline-wrapper'>
            <div className='circle'>+{num}</div>
        </div>
        <p className="mb-0">
            {text}
        </p>
    </div>
}