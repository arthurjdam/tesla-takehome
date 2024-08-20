export function formatPrice(n: number): string {
  return `$${n.toLocaleString()}`;
}

export function formatEnergy(n: number): string {
  if (n > 1000_000) {
    return `${(n / 1000_000).toFixed(1)} TWh`;
  }
  if (n > 1000) {
    return `${(n / 1000).toFixed(1)} GWh`;
  }
  if (n < 1) {
    return `${(n * 1000).toFixed(1)} kWh`;
  }
  return `${n} MWh`;
}

export function formatPower(n: number): string {
  if (n > 1000_000) {
    return `${(n / 1000_000).toFixed(1)} TW`;
  }
  if (n > 1000) {
    return `${(n / 1000).toFixed(1)} GW`;
  }
  if (n < 1) {
    return `${(n * 1000).toFixed(1)} kW`;
  }
  return `${n} MW`;
}

export function formatArea(
  width: number,
  height: number,
  metric = false,
): string {
  // Not needed for this example, but could be useful in the future
  if (metric) {
    return `${(width * 0.3048).toFixed(2)}m x ${(height * 0.3048).toFixed(2)}m`;
  }
  return `${width}ft x ${height}ft`;
}
