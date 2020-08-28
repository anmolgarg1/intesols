// import React, { memo } from 'react';
// import { StyleSheet,Button as Btn } from 'react-native';
// import { Button as PaperButton } from 'react-native-paper';
// import { theme } from '../core/theme';

// type Props = React.ComponentProps<typeof PaperButton>;

// const Button = ({ mode, style, children, ...props }: Props) => (
//   <Btn
//     style={[
//       styles.button,
//       mode === 'outlined' && { backgroundColor: theme.colors.surface },
//       style,
//     ]}
//     labelStyle={styles.text}
//     mode={mode}
//     {...props}
//   >
//     {children}
//   </Btn>
// );

// const styles = StyleSheet.create({
//   button: {
//     width: '100%',
//     marginVertical: 10,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     lineHeight: 26,
//   },
// });

// export default memo(Button);
