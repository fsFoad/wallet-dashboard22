const ICON_MAP: Record<string, string> = {
  home: 'pi-home',
  person: 'pi-user',
  work: 'pi-briefcase',
  monetization_on: 'pi-wallet',
  send: 'pi-send',
  money_off: 'pi-money-bill',
  report: 'pi-chart-bar',
  settings: 'pi-cog',
  supervised_user_circle: 'pi-users',
};

export function resolveMenuIcon(icon: string | null): string {
  if (!icon) {
    return 'pi-circle';
  }

  const mapped = ICON_MAP[icon] ?? 'pi-circle';
  return mapped.startsWith('pi ') ? mapped : `pi ${mapped}`;
}
