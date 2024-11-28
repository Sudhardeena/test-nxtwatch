import {TabItem, TabLink, TabIcon, TabText} from './styledComponents'

const TabListItem = props => {
  const {tabItemDetails, activeTab, theme} = props
  const {id, route, icon, tabName} = tabItemDetails

  return (
    <TabItem theme={theme} active={activeTab === id} id={id}>
      <TabLink to={route}>
        <TabIcon active={activeTab === id}>{icon}</TabIcon>
        <TabText theme={theme} active={activeTab === id}>
          {tabName}
        </TabText>
      </TabLink>
    </TabItem>
  )
}

export default TabListItem
