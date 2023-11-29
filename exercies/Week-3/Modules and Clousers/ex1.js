const StringFormatter = function() {
  const capitalizeFirst1 = function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  const toSkewerCase1 = function(text) {
    return text.replace(" ", "-")
  }
  return {
    capitalizeFirst: capitalizeFirst1,
    toSkewerCase: toSkewerCase1
  }
}
const formatter = StringFormatter()
formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box")