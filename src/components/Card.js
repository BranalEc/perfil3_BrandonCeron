import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '../constants/theme';

// Tarjeta reutilizable: imagen, título, etiqueta opcional y descripción.
export default function Card({ product }) {
  const { title, image, description, category, price, rating } = product;
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {image ? <Image source={{ uri: image }} style={styles.image} resizeMode="contain" /> : null}
      </View>

      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>

        <Text style={styles.category}>{category}</Text>
        {description ? <Text style={styles.description} numberOfLines={3}>{description}</Text> : null}
        <View style={styles.ratingRow}>
          <Text style={styles.star}>*</Text>
          <Text style={styles.rating}>
            {rating?.rate?.toFixed(1) ?? 'Sin valoracion'} {rating?.count ? `(${rating.count})` : ''}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    shadowColor: colors.text,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  imageContainer: {
    height: 210,
    backgroundColor: colors.imageBackground,
    padding: spacing.lg,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  body: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
  },
  price: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
  },
  category: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  star: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: '800',
  },
  rating: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
});
