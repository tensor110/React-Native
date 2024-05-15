import Dimension from '../Tutorial/Dimension/DimensionAPI'
import WindowDim from '../Tutorial/Dimension/useWindowDimension'
import SafeAreaView from '../Tutorial/Dimension/safeAreaView'
import PlatformSpecific from '../Tutorial/Dimension/platformSpecific'

export default function Dimensions(){
    return(
        // <Dimension/>
        // <WindowDim/>
        // <SafeAreaView/>
        <PlatformSpecific/>
    )
}