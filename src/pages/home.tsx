import { Card } from "../components/card"
import { ContentView } from "../components/contentView"
import { InsightsCard } from "../components/insightsCard"

const AddressCard = () => {
  return (
    <div className="address-card-placeholder">
      <Card title="XXX STREETNAME ST, BC, Canada, X#X #X#">
        <p>Type: Apartment</p>
        <p>Built: 2020</p>
        <div className="h-4"/>
        <p className="text-right text-xl">Estimated Rent Price: $X.XX/sqft</p>
        <p className="text-right text-sm">Estimated Total Value: $X XXX XXX</p>
      </Card>
    </div>
  )
}

const SalesHistoryCard = () => {
  return (
    <Card title="Specification">
      <p className="text-right text-lg">Units</p>
      <div className="text-right text-sm">
        <p >10x 1 bed 1 bath (XXX-XXXX sqft)</p>
        <p >5x 2 bed 2 bath (XXX-XXXX sqft)</p>
        <p >2x 4 bed 4 bath (XXX-XXXX sqft)</p>
      </div>
      <p className="text-right text-lg">Amenities</p>
      <div className="text-right text-sm">
        <p >Gym • Skywalk • In Suite Laundry</p>
      </div>
    </Card>
  )
}

const InsightList = () => {
  return (
    <div className="insights-wrapper">
      <div className="flex-row space-y-2">
        <InsightsCard content="Nearby conds all have ...." />
        <InsightsCard content="Recent increase in rent by XX%" />
        <InsightsCard content="Placeholder insight or recomendation" />
        <InsightsCard content="Placeholder insight or recomendation" />
        <InsightsCard content="Placeholder insight or recomendation" />
        <InsightsCard content="Placeholder insight or recomendation" />
      </div>
    </div>
  )
}




export const HomePage = () => {
  
  return (
    <div className="home-page-wrapper p-8">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4 gap-y-0">  
          <div className="flex-row space-y-8">  
            <AddressCard />
            <SalesHistoryCard />
          </div>
          <InsightList />
        </div>
        <div>
          <ContentView />
        </div>
      </div>
    </div>
  )
}