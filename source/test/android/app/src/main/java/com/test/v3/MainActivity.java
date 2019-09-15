package com.test.v3;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.KeyEvent;

import com.test.R;

public class MainActivity extends Activity {
    private static final String TAG = MainActivity.class.getSimpleName();
    private IOnKeyUp mOnKeyUp;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.main_view);

        findViewById(R.id.react_fragment_container);
        getFragmentManager().beginTransaction().replace(R.id.react_fragment_container, new ReactFragment(), ReactFragment.TAG).commit();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        // Android studio Emulator, Ctrl+M ->  dev menu
        Log.d(TAG, "onKeyUp: ");
        return null != mOnKeyUp && mOnKeyUp.onKeyUp(keyCode, event) || super.onKeyUp(keyCode, event);
    }

    public void setOnKeyUp(@Nullable IOnKeyUp onKeyUp) {
        mOnKeyUp = onKeyUp;
    }
}