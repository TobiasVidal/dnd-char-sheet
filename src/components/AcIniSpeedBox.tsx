function AcIniSpeedBox({ text, num }: { text:string, num:number }) {
    return <div className="acIniSpeed-box text-center bg-dark-light">
        <h6 className="text-small p-1 themebg-secondary"><strong>{text.toUpperCase()}</strong></h6>
        <h3 className="mb-3">{num}</h3>
    </div>;
  }
  
export default AcIniSpeedBox;