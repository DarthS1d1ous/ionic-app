package borschevsky.denis.plugin;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.widget.Toast;
import java.util.Date;

/**
 * This class echoes a string called from JavaScript.
 */
public class Demoplugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("showToast")) {
            String message = args.getString(0);
            Toast.makeText(cordova.getActivity().getWindow().getContext(),message,Toast.LENGTH_LONG).show();
        }
        else if(action.equals("getCurrDate")) {
            callbackContext.success(new Date().toString());
        }
        return true;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
}
