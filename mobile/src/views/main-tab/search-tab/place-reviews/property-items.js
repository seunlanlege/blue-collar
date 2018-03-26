import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  flatListWrapper: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    flex: 3,
    justifyContent: 'center',
  },
  amount: {
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
})

class PropertyItems extends React.Component {
  setColor = (colors, index) => {
    if (index > 8) {
      const idx = index % 8
      return colors[idx]
    }
    return colors[index]
  }

  keyExtractor = (item, index) => item.id

  render() {
    const { properties, colors } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={properties}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.flatListWrapper,
                { backgroundColor: this.setColor(colors, index) },
              ]}
            >
              <View style={styles.innerWrapper}>
                <Image source={item.icon_url} />
              </View>
              <View style={styles.name}>
                <Text>{item.item_name}</Text>
              </View>
              <View style={styles.amount}>
                <Text>{item.amount}</Text>
              </View>
            </View>
          )}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    )
  }
}

export default PropertyItems
