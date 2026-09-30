import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { colors, spacing } from '../constants/theme';
import useProducts from '../hooks/useProducts';

export default function ProductsScreen() {
  const insets = useSafeAreaInsets();
  const { products, loading, error, refetch } = useProducts();

  if (loading && products.length === 0) {
    return <Loader message="Cargando catalogo..." />;
  }

  if (error && products.length === 0) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={[styles.list, { paddingBottom: insets.bottom + spacing.lg }]}
      data={products}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={
        <View style={styles.intro}>
          <Text style={styles.introLabel}>FAKE STORE API</Text>
          <Text style={styles.introTitle}>Productos destacados</Text>
          <Text style={styles.introDescription}>Desliza para descubrir el catalogo disponible.</Text>
        </View>
      }
      renderItem={({ item }) => <Card product={item} />}
      ItemSeparatorComponent={Separator}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  list: { padding: spacing.md },
  intro: { paddingVertical: spacing.sm, marginBottom: spacing.md },
  introLabel: { color: colors.primary, fontSize: 12, fontWeight: '800', letterSpacing: 1.4 },
  introTitle: { color: colors.text, fontSize: 26, fontWeight: '800', marginTop: spacing.xs },
  introDescription: { color: colors.textMuted, fontSize: 14, marginTop: spacing.xs },
  separator: { height: spacing.md },
});
