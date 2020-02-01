# rate

To see code, please go "src/components/Rate.js"

![](./src/img/rate.gif)

If you want to show rate, you can change App.js as following lines :


```const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Rate readonly rate={3}/>
    </View>
  );
};

