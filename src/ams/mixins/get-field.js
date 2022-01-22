import { deepExtend } from '../../utils';

export default {
    methods: {
        getField(field, context) {
            // 可以通过field的配置changeConfig动态改变该field的某些配置
            if (context && field.changeConfig) {
                return field.changeConfig(deepExtend({}, field), context, this);
            }
            if (field.props) {
                Object.keys(field.props).forEach((prop) => {
                    const propValue = field.props[prop];
                    if (prop.indexOf('dynamic-') !== 0) return;

                    if (typeof propValue === 'function') {
                        field.props[prop.replace('dynamic-', '')] = propValue(context);
                    } else {
                        delete field.props.prop;
                    }
                });
            }
            return field;
        }
    }
};
