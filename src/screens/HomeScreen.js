import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { student } from '../constants/student';
import { colors, radius, spacing } from '../constants/theme';
import { ROUTES } from '../navigation/routes';

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + spacing.lg }]}
    >
      <View style={styles.heroMark}>
        <Text style={styles.heroMarkText}>BA</Text>
      </View>
      <Text style={styles.eyebrow}>MI PERFIL</Text>

      <Text style={styles.title}>{student.name}</Text>
      <Text style={styles.subtitle}>Explora productos de una tienda en linea</Text>

      <View style={styles.panel}>
        <InfoRow label="Nombre" value={student.name} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección" value={student.section} />
        <InfoRow label="Grupo" value={student.group} />
      </View>

      <PrimaryButton
        title="Explorar catalogo"
        onPress={() => navigation.navigate(ROUTES.PRODUCTS)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  heroMark: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spacing.lg,
    borderWidth: 5,
    borderColor: '#CBE8E8',
  },
  heroMarkText: {
    color: colors.surface,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.8,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  panel: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    marginVertical: spacing.md,
    shadowColor: colors.text,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
});
