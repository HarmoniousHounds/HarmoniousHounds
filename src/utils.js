export const DateStringFormatISO = "YYYY-MM-DD";
export const DateTimeStringFormatShort = "MMM Do, YYYY hh:mm:ss a";

const ViewportSizes = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 0
};

export function GetViewportSize () {
    // https://stackoverflow.com/a/8876069
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }

export function ViewportGreaterThan (sizeString) {
    let width = GetViewportSize();

    for (var key in ViewportSizes) {
        if (sizeString == key) {
            if (width >= ViewportSizes[key]) {
                return true;
            }
        }
    }
    return false;
}

export function GetViewport () {
    let width = GetViewportSize();

    for (var key in ViewportSizes) {
        if (width >= ViewportSizes[key]) {
            return key;
        }
    }
    return "xs";
}

// Builds a "where" query string, specifically for the AMS URLQueryToSQL API.
// It takes a list of items and AND's them together.
// Each item is then compared to all of the columns OR'd together.
// IE:
//      itemList = ["185", "darren"]
//      columns = ["serial", "username", "event"]
//      result = "(&(=serial,LIKE,%25185%25&)&OR&(=username,LIKE,%25185%25&)&OR&(=event,LIKE,%25185%25&)&)&AND&(&(=serial,LIKE,%25darren%25&)&OR&(=username,LIKE,%25darren%25&)&OR&(=event,LIKE,%25darren%25&)&)&"
//      SQL Translation: (WHERE) ((serial LIKE %185%) OR (username LIKE %185%) OR (event LIKE %185%)) AND ((serial LIKE %25darren%) OR (username LIKE %25darren%) OR (event LIKE %25darren%))
export function WhereStringFromItemList (itemList, columns) {
    let result = "";
    for (const item in itemList) {
        if (result != "") {result += "AND&"}
        result += "(&";
        let first = true;
        for (const column in columns) {
            if (!first) {
                result += "OR&";
            }
            first = false;
            result += "(=" + columns[column] + ",LIKE,%25" + itemList[item] + "%25&)&";
        }
        result += ")&";
    }
    return result;
}