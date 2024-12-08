use prettytable::*;

fn main() {
  let mut table = Table::new();

  table.set_titles(row![cFc => "Day", "Answer A", "Answer B"]);

  table.set_format(
    format::FormatBuilder::new()
      .column_separator('│')
      .borders('│')
      .separators(&[format::LinePosition::Top], format::LineSeparator::new('─', '┬', '┌', '┐'))
      .separators(&[format::LinePosition::Intern], format::LineSeparator::new('─', '┼', '├', '┤'))
      .separators(&[format::LinePosition::Bottom], format::LineSeparator::new('─', '┴', '└', '┘'))
      .padding(1, 1)
      .build()
  );
  table.printstd();
}
