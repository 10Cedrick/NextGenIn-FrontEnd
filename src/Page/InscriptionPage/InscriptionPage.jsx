import { InscriptionForm } from "../../component"
import { connect } from "../../assets"
import './InscriptionPage.css'
export default function InscriptionPage() {
  return (
    <main>
        <div className="flex flex-row items-center">
            <div className="flex-1 w-1/2 h-screen overflow-hidden relative bgImage">
                <img src={connect} alt="" className=""/>
            </div>
            <InscriptionForm className='flex-1 w-1/2'/>
        </div>
    </main>
  )
}
