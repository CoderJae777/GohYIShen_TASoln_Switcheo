"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Datasource = /** @class */ (function () {
    function Datasource() {
    }
    return Datasource;
}());
var WalletPage = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    var balances = useWalletBalances();
    var _a = (0, react_1.useState)({}), prices = _a[0], setPrices = _a[1];
    (0, react_1.useEffect)(function () {
        var datasource = new Datasource("https://interview.switcheo.com/prices.json");
        datasource.getPrices().then(function (prices) {
            setPrices(prices);
        }).catch(function (error) {
            console.err(error);
        });
    }, []);
    var getPriority = function (blockchain) {
        switch (blockchain) {
            case 'Osmosis':
                return 100;
            case 'Ethereum':
                return 50;
            case 'Arbitrum':
                return 30;
            case 'Zilliqa':
                return 20;
            case 'Neo':
                return 20;
            default:
                return -99;
        }
    };
    var sortedBalances = useMemo(function () {
        return balances.filter(function (balance) {
            var balancePriority = getPriority(balance.blockchain);
            if (lhsPriority > -99) {
                if (balance.amount <= 0) {
                    return true;
                }
            }
            return false;
        }).sort(function (lhs, rhs) {
            var leftPriority = getPriority(lhs.blockchain);
            var rightPriority = getPriority(rhs.blockchain);
            if (leftPriority > rightPriority) {
                return -1;
            }
            else if (rightPriority > leftPriority) {
                return 1;
            }
        });
    }, [balances, prices]);
    var formattedBalances = sortedBalances.map(function (balance) {
        return __assign(__assign({}, balance), { formatted: balance.amount.toFixed() });
    });
    var rows = sortedBalances.map(function (balance, index) {
        var usdValue = prices[balance.currency] * balance.amount;
        return className = { classes: classes, : .row };
        key = { index: index };
        amount = { balance: balance, : .amount };
        usdValue = { usdValue: usdValue };
        formattedAmount = { balance: balance, : .formatted }
            /  >
        ;
    });
};
return (__assign({}, rest) >
    { rows: rows }
    < /div>);
