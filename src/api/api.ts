import data from './data.json';

export function extractRows() {
  const rows = data.data.AuthorWorklog.rows;

  return rows;
}

export function extractDeveloperActiveDays() {
  const rows = extractRows();

  return rows.map((row) => ({
    name: row.name.replace('@devdynamics.ai', ''),
    activeDays: row.activeDays.days,
  }));
}

export function extractActivitySummaryData() {
  const rows = extractRows();

  const activitySummary = rows.map((row) => ({
    name: row.name.replace('@devdynamics.ai', ''),
    activity: row.totalActivity.reduce(
      (total, item) => total + parseInt(item.value, 10),
      0
    ),
  }));

  return activitySummary;
}

export function extractDayWiseActivityData() {
  const rows = extractRows();

  return rows.flatMap((row) =>
    row.dayWiseActivity.map((activity) => ({
      date: activity.date,
      ...activity.items.children.reduce(
        (acc, item) => ({
          ...acc,
          [item.label]: parseInt(item.count),
        }),
        {}
      ),
    }))
  );
}
