import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  listContainer: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
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

export class PropertyItems extends React.Component {
  setColor = (colors, index) => {
    if (index > 8) {
      const idx = index % 8
      return colors[idx]
    }
    return colors[index]
  }

  keyExtractor = (item, index) => item.id.toString()

  render() {
    const { properties, colors, groupBids } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={properties}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1 }}>
              {index === 0 && <View style={styles.listContainer} />}
              <View
                style={[
                  styles.flatListWrapper,
                  { backgroundColor: this.setColor(colors, index) },
                ]}
              >
                <View style={styles.innerWrapper}>
                  <Image
                    source={item.icon}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.name}>
                  <Text>{item.name}</Text>
                </View>
                <View style={styles.amount}>
                  <Text>{groupBids[item.slug] || 0}</Text>
                </View>
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
