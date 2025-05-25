import { Card } from "../components/card"
import { ContentView } from "../components/ContentView"
import { InsightsCard } from "../components/insightsCard"

const AddressCard = () => {
  return (
    <div className="address-card-placeholder">
      <Card title="XXX STREETNAME ST, BC, Canada, X#X #X#">
        <p className="text-right">1 bed 1 bath ### sqft</p>
        <p>Type: Apartment</p>
        <p>Built: 20XX</p>
        <div className="h-8"/>
        <p className="text-center text-xl">Estimated Value: $X XXX XXX</p>
        <div className="h-4"/>
        <p className="text-right text-sm">Market Value: $X XXX XXX</p>
        <p className="text-right text-sm">Previous Years Market Value: $X XXX XXX</p>
      </Card>
    </div>
  )
}

const SalesHistoryCard = () => {
  return (
    <Card title="SALES HISTORY">
      <div className="h-8"/>
      <div className="text-right text-m">
        <p>Sold July 15, 2025 - $X XXX XXX</p>
        <p>Sold July 14, 2024 - $X XXX XXX</p>
        <p>Built July 16, 2023 - $X XXX XXX</p>
      </div>
    </Card>
  )
}

const InsightList = () => {
  return (
    <div className="insights-wrapper">
      <div className="flex-row space-y-2">
        <InsightsCard content="Nearby homes all have ...." />
        <InsightsCard content="Recent sale of nearby home for $X XXX XXX" />
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
    <div className="home-page-wrapper">
      <div className="grid grid-rows-2 gap-4">
        <div className="grid grid-cols-2 gap-4">  
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